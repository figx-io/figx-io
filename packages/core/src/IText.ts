import type IComponent from './IComponent';
import type ISolidColor from './ISolidColor';

export default interface IText extends IComponent {
	characters: string;
	fill: ISolidColor | null;
	font_family: string;
	font_size: number;
	font_weight: number;
	line_height: number | 'auto';
	max_lines: number;
	text_align_horizontal: 'left' | 'center' | 'right' | 'justified';
	text_align_vertical: 'top' | 'middle' | 'bottom';
	truncate_text: boolean;
	vertical_trim: 'standard' | 'cap';
}
