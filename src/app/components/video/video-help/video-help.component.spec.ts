import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VideoHelpComponent} from './video-help.component';
import {AppModule} from '../../../app.module';

describe('VideoHelpComponent', () => {
  let component: VideoHelpComponent;
  let fixture: ComponentFixture<VideoHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        VideoHelpComponent
      ],
      imports: [AppModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
