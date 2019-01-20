import { Component, OnInit } from '@angular/core';
import { MainService } from "../main.service";
declare var TimelineLite, Back: any;
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  event: any;
  slug: any;
  constructor(private mainService: MainService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        this.slug = params['id']
        this.mainService.getEvent(params['id']).subscribe(
          (event) => {
            this.event = event;
            this.timline();
          }, (err) => {
            console.log(err);
          });
      }
    });
    
  }
  timline() {
    var slides = document.querySelectorAll('.slide'), tl = new TimelineLite({ paused: true });
    for (var i = slides.length; i--;) {
      var D = document.createElement('div'); 
      D.style.width = '8px';
      D.style.height = '8px';
      D.style.borderRadius = '50%';
      D.style.position = 'relative';
      D.style.cssFloat = 'left';
      D.style.backgroundColor = '#fff';
      D.style.opacity = '1';
      D.style.margin = '5px';
      D.style.marginBottom = '0px';
      D.style.cursor = 'pointer';
      D.style.border = '2px solid rgba(255,255,255,0.7)';
      D.id = 'Dot' + i;
      D.addEventListener('click', function () { tl.seek(this.id).pause() });
      document.getElementById('Dots').appendChild(D);
      tl.add('Dot' + i)
      if (i > 0) {
        if (i != slides.length - 1) { tl.addPause() }
        tl.to(slides[i], 0.5, { scale: .5, ease: Back.easeOut })
          .to(slides[i], 0.7, { xPercent: -50 }, 'L' + i)
          .from(slides[i - 1], 0.7, { xPercent: 50 }, 'L' + i)
          .to('#Dot' + i, 0.7, { backgroundColor: 'rgba(255,255,255,0.2)' }, 'L' + i)
          .set(slides[i], { zIndex: 1 - i }).set(slides[i - 1], { zIndex: slides.length })
          .from(slides[i - 1], 0.5, { scale: .5, ease: Back.easeIn })
      };
    };
    function GO(e) {
      if (e < 0) { tl.play() } else { tl.reverse() };
    };

    document.getElementById('nextBtn').addEventListener("click", function () { GO(-1) });
    document.getElementById('prevtBtn').addEventListener("click", function () { GO(1) });
  }

}
