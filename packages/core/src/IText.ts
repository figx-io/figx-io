import type IComponent from './IComponent';

export default interface IText extends IComponent {
	characters: string;
	font_family: string;
	font_size: number;
	font_weight: number;
	line_height: number | 'auto';
	text_align_horizontal: 'left' | 'center' | 'right' | 'justified';
}
