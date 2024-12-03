export default interface IComponent {
	auto_layout: 'none' | 'horizontal' | 'vertical' | 'wrap';
	height: number | 'fill' | 'hug';
	width: number | 'fill' | 'hug';
}
