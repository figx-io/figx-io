export default interface IComponent {
	add_component: (value: IComponent) => void;
	alignment: 'top_left' | 'top_center' | 'top_right' | 'left' | 'center' | 'right' | 'bottom_left' | 'bottom_center' | 'bottom_right';
	auto_layout: 'horizontal' | 'vertical' | 'wrap';
	gap_horizontal: number | 'auto';
	gap_vertical: number | 'auto';
	height: number | 'fill' | 'hug';
	max_height: number;
	max_width: number;
	min_height: number;
	min_width: number;
	padding_horizontal: number;
	padding_vertical: number;
	width: number | 'fill' | 'hug';
}
