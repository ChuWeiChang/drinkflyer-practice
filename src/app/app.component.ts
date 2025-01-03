import {Component, ViewEncapsulation} from '@angular/core';
import {DiscountBarComponent} from './discount-bar/discount-bar.component';
import {HeaderComponent} from './header/header.component';
import {HeroBannerComponent} from './hero-banner/hero-banner.component';
import {MerchandiseListComponent} from './merchandise-list/merchandise-list.component';
import {ProductFeatureBannerComponent} from './product-feature-banner/product-feature-banner.component';
import {SecondaryHeroBannerComponent} from './secondary-hero-banner/secondary-hero-banner.component';
import {PartnersComponent} from './partners/partners.component';
import {UserCommentsComponent} from './user-comments/user-comments.component';
import {FAQComponent} from './faq/faq.component';
import {FootersComponent} from './footers/footers.component';
import {ProductFeatureListComponent} from './product-feature-list/product-feature-list.component';

@Component({
  selector: 'app-root',
  imports: [DiscountBarComponent, HeaderComponent, HeroBannerComponent, MerchandiseListComponent, ProductFeatureListComponent, ProductFeatureBannerComponent, SecondaryHeroBannerComponent, PartnersComponent, UserCommentsComponent, FAQComponent, FootersComponent, ProductFeatureListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'drinkflyers';
}
