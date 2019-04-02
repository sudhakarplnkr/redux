import { Beneficiary } from './beneficiary';
import { Council } from './council';
import { EventCategory } from './eventCategory';
import { Project } from './project';
import { TransportBoardingType } from './transportBoardingType';

export class EventDefaultValues {
  public beneficiary: Beneficiary[];
  public council: Council[];
  public project: Project[];
  public eventCategory: EventCategory[];
  public transportBoardingType: TransportBoardingType[];
}