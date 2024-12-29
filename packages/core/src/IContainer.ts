import type IComponent from './IComponent';

export default interface IContainer extends IComponent {
	add_component: (value: IComponent) => void;
	alignment: 'top_left' | 'top_center' | 'top_right' | 'left' | 'center' | 'right' | 'bottom_left' | 'bottom_center' | 'bottom_right';
	auto_layout: 'horizontal' | 'vertical' | 'wrap';
	gap_horizontal: number | 'auto';
	gap_vertical: number | 'auto';
	padding_horizontal: number;
	padding_vertical: number;
}
