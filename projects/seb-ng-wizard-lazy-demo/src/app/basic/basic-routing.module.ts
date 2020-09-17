// setup routes and wizard steps in route module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WizardSteps } from '@sebgroup/ng-wizard';
import { BasicComponent } from './basic.component';
import { StepFinalComponent } from './components/step-final/step-final.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';

const routes: WizardSteps = [
  {
    path: '',
    component: BasicComponent,
    children: [
      { path: '', redirectTo: 'step-one' },
      {
        path: 'step-one',
        component: StepOneComponent,
        data: {
          heading: 'Step one',
          controls: [
            {
              name: 'Step two',
              path: 'step-two',
              type: 'next',
            },
          ],
        },
      },
      {
        path: 'step-two',
        component: StepTwoComponent,
        data: {
          heading: 'Step two',
          controls: [
            {
              name: 'Step one',
              path: 'step-one',
              type: 'prev',
            },
            {
              class: 'btn-outline-danger',
              name: 'Clear events',
              type: 'cancel',
            },
            {
              class: 'btn-primary',
              name: 'Save',
              type: 'save',
            },
            {
              class: 'btn-primary',
              path: 'step-final',
              type: 'next',
            },
          ],
        },
      },
      {
        path: 'step-final',
        component: StepFinalComponent,
        data: {
          heading: 'Final step',
          hideNavigation: true,
          controls: [
            {
              name: 'Step two',
              path: 'step-two',
              type: 'prev',
            },
            {
              class: 'btn-primary',
              name: 'Close',
              type: 'close',
            },
          ],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicRoutingModule {}
