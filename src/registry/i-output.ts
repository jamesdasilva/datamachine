export default interface IOutput {
	generate(data: any, dataFileName: string): boolean;
	extract();
};
