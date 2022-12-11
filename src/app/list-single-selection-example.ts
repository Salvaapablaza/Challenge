import {Component} from '@angular/core';
import datasources from './datasources.json';
import {datainput, datasource} from './datasource';
import datainputs from './datainputs.json';

/**
 * @title Challenge
 */
@Component({
  selector: 'list-single-selection-example',
  templateUrl: 'list-single-selection-example.html',
})
export class ListSingleSelectionExample {
  Datasources: datasource[] = datasources;
  Datainputs: datainput[]= datainputs;
  typesOfDatasources: string[] = ['EPIC iO FM Office Purple 01', 'Dash-EV-UIG001-Purple', 'EpicEng-Purple-01', 'EastPoint-UIG-027-Purple', 'EastPoint-UIG-019-Purple','EastPoint-UIG-023-Purple','EastPoint-UIG-021-Purple','EastPoint-UIG-017-Purple','EastPoint-UIG-022-Purple','EastPoint-UIG-018-Purple','EastPoint-UIG-013-Purple','EastPoint-UIG-020-Purple','EastPoint-UIG-015-Purple','EastPoint-UIG-016-Purple','EastPoint-UIG-014-Purple','EastPoint-UIG-012-Purple','EastPoint-UIG-007-Purple','EastPoint-UIG-006-Purple','EastPoint-UIG-011-Purple','EastPoint-UIG-008-Purple','EastPoint-UIG-005-Purple','EastPoint-UIG-004-Purple','EastPoint-UIG-001-Purple','EastPoint-UIG-002-Purple','riverbank-rbk09-purpleair-01','riverbank-rbk11-purpleair-01','riverbank-rbk07-purpleair-01','riverbank-rbk05-purpleair-01','riverbank-rbk08-purpleair-01','riverbank-rbk13-purpleair-01','riverbank-rbk03-purpleair-01','riverbank-rbk04-purpleair-01','riverbank-rbk12-purpleair-01','riverbank-rbk02-purpleair-01','riverbank-rbk10-purpleair-01','riverbank-rbk01-purpleair-01','riverbank-rbk14-purpleair-01','riverbank-rbk06-purpleair-01'];
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */