import type IComponent from './IComponent';

export default interface IChild extends IComponent {
	invalidateSize: () => void;
}
