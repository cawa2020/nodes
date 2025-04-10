import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { treeNodes } from '../data/nodes';
import { TreeNodeComponent } from "./tree-node/tree-node.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TreeNodeComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  treeNodes = treeNodes;
}
