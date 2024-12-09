import type IComponent from './IComponent';

export default interface IChild extends IComponent {
	parent_auto_layout: 'horizontal' | 'vertical' | 'wrap';
}
