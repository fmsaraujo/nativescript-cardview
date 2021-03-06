import { EventData, Observable } from "data/observable";
import { CardView } from "nativescript-cardview";
import { isAndroid, isIOS } from "platform";
import * as frame from "ui/frame";

export class Demo extends Observable {

  constructor() {
    super();
  }

  public goAway(args) {
    let page = frame.topmost().currentPage;
    let card = <CardView>page.getViewById('batCard');
    card.animate({
      scale: { x: 0, y: 0 },
      opacity: 0,
      duration: 1000
    }).then(() => {
      card.visibility = 'collapse';
    });
  }

  public goAwayJoker(args) {
    let page = frame.topmost().currentPage;
    let card = <CardView>page.getViewById('jokerCard');
    card.animate({
      scale: { x: 0, y: 0 },
      opacity: 0,
      duration: 1000
    }).then(() => {
      card.visibility = 'collapse';
    });
  }

  public cardLoaded(args: EventData) {
    let card = <CardView>args.object;
    console.log('card = ' + card);
    if (isAndroid) {
      console.log('card native android = ' + card.android);
    } else if (isIOS) {
      console.log('card native ios = ' + card.ios);
    }
  }
}
