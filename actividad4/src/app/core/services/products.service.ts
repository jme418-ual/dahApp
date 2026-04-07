import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, query, where, addDoc, doc, docData, deleteDoc } from '@angular/fire/firestore';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from './auth.service';
import { Product } from '../models/product.model';
import { switchMap, of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  private productsCollection = collection(this.firestore, 'products');

  private myProducts$ = this.authService.user$.pipe(
    switchMap((user) => {
      if (!user) {
        return of([] as Product[]);
      }

      const q = query(
        this.productsCollection,
        where('userId', '==', user.uid)
      );

      return collectionData(q, { idField: 'id' }) as Observable<Product[]>;
    })
  );

  public myProducts = toSignal(this.myProducts$, { initialValue: [] as Product[] });

  async addProduct(product: Omit<Product, 'id' | 'userId'>) {
    const uid = this.authService.getUID();

    if (!uid) throw new Error('No hay usuario autenticado');

    return addDoc(this.productsCollection, {
      ...product,
      userId: uid,
    });
  }

  getProductsByUserId(userId: string): Observable<Product[]> {
    const q = query(this.productsCollection, where('userId', '==', userId));
    return collectionData(q, { idField: 'id' }) as Observable<Product[]>;
  }

  getProductById(productId: string): Observable<Product | undefined> {
    const productDoc = doc(this.firestore, `products/${productId}`);
    return docData(productDoc, { idField: 'id' }) as Observable<Product | undefined>;
  }

  async deleteProduct(productId: string) {
    const productDoc = doc(this.firestore, `products/${productId}`);
    return deleteDoc(productDoc);
  }
}