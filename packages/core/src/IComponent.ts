export default interface IComponent {
	add_component: (value: IComponent) => void;
	alignment: 'top_left' | 'top_center' | 'top_right' | 'left' | 'center' | 'right' | 'bottom_left' | 'bottom_center' | 'bottom_right';
	auto_layout: 'horizontal' | 'vertical' | 'wrap';
	height: number | 'fill' | 'hug';
	padding_horizontal: number;
	padding_vertical: number;
	width: number | 'fill' | 'hug';
}
