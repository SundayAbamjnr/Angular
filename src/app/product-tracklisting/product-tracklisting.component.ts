// tslint:disable-next-line:quotemark
import { Component, OnInit } from "@angular/core";

// tslint:disable-next-line:quotemark
import { ProductService } from "../product.service";

// tslint:disable-next-line:quotemark
import { Album } from "../album";

@Component({
  // tslint:disable-next-line:quotemark
  selector: "app-product-tracklisting",
  // tslint:disable-next-line:quotemark
  templateUrl: "./product-tracklisting.component.html",
  // tslint:disable-next-line:quotemark
  styleUrls: ["./product-tracklisting.component.css"],
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo: Album;

  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this._productService
      .getAlbum(1)
      .subscribe((response) => (this.albumInfo = response));
  }
}
