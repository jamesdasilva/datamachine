export default interface IResgistry {
	write(data: any, dataFileName?: string): boolean;
	extract();
};
