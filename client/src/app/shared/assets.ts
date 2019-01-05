import { environment } from '../../environments/environment';
export let DOMAIN: any;
export let DJANGO_ASSETS: any;

if (!environment['production']) {
  DOMAIN = 'http://localhost:8000';
  DJANGO_ASSETS = './assets'
} else {
  DOMAIN = '.';
  DJANGO_ASSETS = "/static/ang/assets"
}

// Images constant
export const IMAGE_404 = DJANGO_ASSETS + "/404.svg"
export const IMAGE_ABOUT = DJANGO_ASSETS + "/about.svg"
export const IMAGE_AUTH = DJANGO_ASSETS + "/auth.png"
export const IMAGE_CLASSROOM = DJANGO_ASSETS + "/classroom.svg"
export const IMAGE_CONTACT = DJANGO_ASSETS + "/contact.svg"
export const IMAGE_FOOTER_TOWN = DJANGO_ASSETS + "/footer_town.png"
export const IMAGE_HEADER = DJANGO_ASSETS + "/header.svg"
export const IMAGE_LATEST = DJANGO_ASSETS + "/latest_news.svg"
