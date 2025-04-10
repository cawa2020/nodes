import { Component, Input } from '@angular/core';
import TreeNode from './tree-node.interface';

@Component({
  selector: 'app-tree-node',
  imports: [],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.css'
})
export class TreeNodeComponent {
  @Input() node!: TreeNode
  @Input() showLines = false
  public isExpanded = false

  ngOnInit() {
    const sessionValue = sessionStorage.getItem(String(this.node.id))
    if (sessionValue) {
      this.isExpanded = sessionValue == 'true'
    }
  }

  toggleNode(): void {
    this.isExpanded = !this.isExpanded;
    sessionStorage.setItem(String(this.node.id), String(this.isExpanded))
  }
}
