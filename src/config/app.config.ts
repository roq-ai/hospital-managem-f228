interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['System Administrator'],
  customerRoles: ['Guest'],
  tenantRoles: ['System Administrator', 'Doctor', 'Pharmacist', 'Nurse'],
  tenantName: 'Hospital',
  applicationName: 'Hospital Management  v2',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View available doctors in a hospital.', 'Request an appointment with a doctor.'],
  ownerAbilities: ['Manage users in the system.'],
};
