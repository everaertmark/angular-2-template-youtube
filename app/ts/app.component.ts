import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent } from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos: Array<Video>;

    constructor() {
        this.videos = [
            new Video(1, "bla", "gmemge", "Awesome video"),
            new Video(2, "Video nummer 22222", "0i9609063", "Video beschrijving nummer 2")
        ];
    }
}
