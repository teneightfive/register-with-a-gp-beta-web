import nameStep from './your-name';
import dateOfBirthStep from './date-of-birth';
import homeAddressStep from './home-address';
import contactEmailStep from './contact-email';
import contactTelephoneStep from './contact-telephone';
import previouslyRegisteredStep from './previously-registered';
import currentGP from './current-gp';
import registeredAddressStep from './registered-address';
import registeredAddressDetailsStep from './registered-address-details';
import registeredNameStep from './registered-name';
import registeredNameDetailsStep from './registered-name-details';
import nhsNumberStep from './nhs-number';
import nhsNumberDetailsStep from './nhs-number-details';
import currentMedicationStep from './current-medication';
import currentMedicationDetailsStep from './current-medication-details';
import allergiesStep from './allergies';
import allergiesDetailsStep from './allergies-details';
import medicalHistoryStep from './medical-history';
import summaryStep from './summary';
/**
 * @typedef {object} InputField
 * @property {string} ID - maps to HTML element ID
 * @property {string} label - maps to HTML <label> text
 * @property {string} type - maps to HTML <input> type
 */

/**
 * A step in the registration journey
 * Each step will map to a page with a form that renders the defined
 * @Step#fields
 *
 * @typedef {object} Step
 * @property {string} key - a unique ID for url-helpers like request.aka.
 * @property {string} slug - slug used to make up the last part of the url
 * @property {string} title - Title of the page and what is asked to the user,
 * this is also slugified into the url for the page.
 * @property {string} beforeTemplate - A template to include before the fields
 * @property {object} schema - a Joi schema to validate the supplied data
 * against.
 * @property {object} handlers - a GET and POST handler, typically created
 * using the postHandlerFactory and getHandlerFactory defined in 'common.js'.
 * @property {Function} [checkApplies] - function that checks if this step
 * should be run.
 */

/**
 * A list of registration @Steps, where order is important because
 * that will control the order in which they'll be asked.
 * @type {Array.<Step>}
 */
const steps = [
  nameStep,
  dateOfBirthStep,
  homeAddressStep,
  contactEmailStep,
  contactTelephoneStep,
  // armed forces?
  previouslyRegisteredStep,
  currentGP,
  registeredAddressStep,
  registeredAddressDetailsStep,
  registeredNameStep,
  registeredNameDetailsStep,
  nhsNumberStep,
  nhsNumberDetailsStep,
  currentMedicationStep,
  currentMedicationDetailsStep,
  allergiesStep,
  allergiesDetailsStep,
  medicalHistoryStep,
  summaryStep
];

export default steps;
