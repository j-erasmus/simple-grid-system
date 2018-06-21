export class AbstractBaseModel {

  /**
   * this will mape the fields from the object you pass in onto the instance of this model object
   * @param object object ans instance of the object that you want to map
   * */
  mapProperties(object) {
    if (object) {
      this.initialiseProperties();
      this.assignEntityProperties(object);
    }
  }

  updatePropreties(object) {
    if(object){
      this.assignEntityProperties(object)
    }
  }

  initialiseProperties() {
    for (let property in this) {
      if (!property) {
        property = null;
      }
    }
  }

  assignEntityProperties(object) {
    for (let property in object) {
      this.assignPropertyToEntityIfDefined(object, property);
    }
  }

  assignPropertyToEntityIfDefined(object, property) {
    if (object.hasOwnProperty(property) && object[property] !== null && this.hasOwnProperty(property)) {
      this[property] = object[property];
    }
  }

}
