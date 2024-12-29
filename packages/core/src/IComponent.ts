export default interface IComponent {
	corner_radius: number;
	height: number | 'fill' | 'hug';
	max_height: number;
	max_width: number;
	min_height: number;
	min_width: number;
	opacity: number;
	width: number | 'fill' | 'hug';
}
