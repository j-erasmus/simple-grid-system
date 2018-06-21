import {AbstractBaseModel} from '../../../common/abstract/abstract-base-model';

export class GridCellModel extends AbstractBaseModel {

  id = null;
  x = null;
  y = null;
  cellTemplate = null;
  isSelected = null;

  constructor(cell) {

    super();
    super.mapProperties(cell);
  }
}
