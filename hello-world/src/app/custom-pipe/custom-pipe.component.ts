import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  template: `
    {{ text | summary:10 }}
  `
})
export class CustomPipeComponent implements OnInit {
  text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consectetur nunc feugiat ex dignissim, a aliquam massa laoreet. Praesent sed nunc ut libero egestas venenatis eget eget ipsum. Morbi mi elit, molestie vel euismod sit amet, tempor id nunc. Integer nibh lectus, luctus nec purus vel, fermentum iaculis erat. Sed eget ante vel lectus fermentum egestas. Proin consectetur, nisl a hendrerit sollicitudin, metus urna tristique turpis, gravida pharetra erat arcu et purus. Phasellus mauris est, lobortis ut pretium sit amet, congue nec orci. Proin consequat enim a aliquet iaculis. Phasellus viverra libero odio, fermentum varius justo condimentum at. Ut dictum consequat rutrum. Proin eget suscipit dui. In dapibus malesuada felis vel interdum. Integer ornare diam lorem. Donec sit amet sem eu sem tempus pharetra at vel elit.

  Interdum et malesuada fames ac ante ipsum primis in faucibus. In hac habitasse platea dictumst. Maecenas vehicula tempus lectus sit amet sodales. Aliquam augue nibh, consequat non turpis et, commodo congue risus. Donec congue, metus ac suscipit interdum, sem sapien egestas diam, et volutpat nibh neque eget elit. Etiam hendrerit quis odio eu faucibus. Nulla ornare fermentum odio, sit amet pellentesque velit laoreet aliquam. Pellentesque lobortis massa maximus ultrices vulputate. Aenean laoreet, nulla vel elementum ornare, sem nisl dictum tellus, nec aliquet ipsum risus at velit. Aliquam at enim ullamcorper, pretium ante at, pulvinar nibh. Vivamus et faucibus mauris, mollis posuere diam. Suspendisse potenti.`

  constructor() { }

  ngOnInit(): void {
  }
}
