import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent {
  constructor(private router: Router) {}

  @Input({ required: true })
  items!: GridItem[];

  @Input({ required: true })
  createLink!: string[];

  create() {
    this.router.navigate(this.createLink);
  }

  link(item: GridItem) {
    this.router.navigate(item.link);
  }
}

export interface GridItem {
  title: string;
  text: string;
  link: string[];
}
