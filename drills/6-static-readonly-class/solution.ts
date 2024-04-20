//  ⚠️ SOLUTION ⚠️
//  Exercise 6: Class with Static and Readonly
// Create a class called Configuration with a static readonly property fileName of type string initialized to 'config.json', and a method called printConfig that prints fileName.

class Configuration {
  static readonly fileName: string = "config.json";

  static printConfig(): void {
    console.log(this.fileName);
  }
}



