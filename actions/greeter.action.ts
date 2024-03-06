import { UnsuccessfulActionError, userLogger } from '@dynatrace-sdk/automation-action-utils/actions';
import { appSettingsObjectsClient } from '@dynatrace-sdk/client-app-settings';

export default async (payload) => {
  if (!payload.name) {
    throw new UnsuccessfulActionError("Input field 'name' is missing.");
  }

  if (!payload.connectionId) {
    throw new UnsuccessfulActionError("Input field 'connectionId' is missing.");
  }

  // Retrieves the app settings object associated with the given objectId.
  // Its values can be later used to, for example, communicate with third party services.
  const connectionObject = await appSettingsObjectsClient.getAppSettingsObjectByObjectId({
    objectId: payload.connectionId,
  });

  userLogger.info(`Hello ${payload.name}! Have a great day!`);
  return { message: `Hello ${payload.name}!`};
};
