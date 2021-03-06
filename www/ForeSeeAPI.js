var exec = require("cordova/exec");

const ForeSeeAPI = "ForeSeeAPI";

function validate(args) {
    if (args && args.constructor !== Array) {
        console.log("WARNING: ForeSeeAPI arguments not packed into an array. Method will not behave as expected.");
    }
    return args;
}

/**
 * @description
 * Programmatically present the survey for a given survey ID (sid).
 *
 * @example
 * cordova.plugins.ForeSeeAPI.showSurvey(["app_test_1"], _onSuccess, _onFailure);
 *
 * @param  {array} args - Array of strings, we expect a surveyID inside.
 * @param  {callback} success - A Cordova-style success callback object.
 * @param  {callback} error - A Cordova-style error callback object.
 */
exports.showSurvey = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "showSurvey", validate(args));
};

/**
 * @description
 * Programmatically present the invitation for a given survey ID (sid).
 *
 * @example
 * cordova.plugins.ForeSeeAPI.showInvite(["app_test_1"], _onSuccess, _onFailure);
 *
 * @param {array} args - Array of strings, we expect a surveyID inside.
 * @param {callback} success - A Cordova-style success callback object.
 * @param {callback} error - A Cordova-style error callback object.
 */
exports.showInvite = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "showInvite", validate(args));
};

/**
 * @description
 * Check to see if the user is eligible for a survey.
 * If the user meets trigger criteria *and* are in the sampling pool, the invitation is presented.
 * Implementers must explicitly check for eligibility (the SDK does not do this automatically).
 *
 * @example
 * cordova.plugins.ForeSeeAPI.checkEligibility(_onSuccess, _onFailure);
 *
 * @param {callback} success - A Cordova-style success callback object.
 * @param {callback} error - A Cordova-style error callback object.
 */
exports.checkEligibility = function (success, error) {
    exec(success, error, ForeSeeAPI, "checkEligibility", []);
};

/**
 * @description
 * Sets a CPP key/value pair. CPPs are transmitted along with surveys upon submission.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.setCPPValue(["customParam", "customValue"], _onSuccess, _onFailure);
 *
 * @param {array} args - Array of parameters, we expect a key/value pair inside. Required by Cordova's plugin EXEC.
 * @param {callback} success - A Cordova-style success callback object.
 * @param {callback} error - A Cordova-style error callback object.
 */
exports.setCPPValue = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "addCPPValue", validate(args));
};

/**
 * @description
 * Removes a CPP value.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.removeCPPValue(["customParam"], _onSuccess, _onFailure);
 *
 * @param {array} args - Array of string, we expect a single key inside.
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.removeCPPValue = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "removeCPPValue", validate(args));
};

/**
 * @description
 * Gets a CPP value.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.getCPPValue(["customParam"], _onSuccess, _onFailure);
 *
 * @param {array} args - Array of string, we expect a single key inside.
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.getCPPValue = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "getCPPValue", validate(args));
};

/**
 * @description
 * Gets all CPP key/value pairs.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.getAllCPPs(_onSuccess, _onFailure);
 *
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.getAllCPPs = function (success, error) {
    exec(success, error, ForeSeeAPI, "getAllCPPs", []);
};

/**
 * @description
 * Manually increment the number of pages counted by the ForeSee SDK.
 * This can be useful when the user expected a new page to have been shown.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.incrementPageViews(_onSuccess, _onFailure);
 *
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.incrementPageViews = function (success, error) {
    exec(success, error, ForeSeeAPI, "incrementPageViews", []);
};

/**
 * @description
 * Increment the significant event count for a given key.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.incrementSignificantEventCount(["yourSignificantEventKey"], _onSuccess, _onFailure);
 *
 * @param {array} args - Array of string, we expect to get a single string inside.
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.incrementSignificantEventCount = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "incrementSignificantEvent", validate(args));
};

/**
 * @description
 * Reset the state of the tracker.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.resetState(_onSuccess, _onFailure);
 *
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command
 * The callback takes one parameter, containing the message from a command
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.resetState = function (success, error) {
    exec(success, error, ForeSeeAPI, "resetState", []);
};

/**
 * @description
 * Starts the CX Measure module.
 * Behavior of the two modules is defined in the foresee_configuration.json file.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.start(_onSucess, _onFailure);
 *
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.start = function (success, error) {
    exec(success, error, ForeSeeAPI, "start", []);
};

/**
 * @description
 * Starts the CX Measure module using a custom configuration file in your native project.
 * Behavior of the two modules is defined in the named configuration file in your project.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.startWithConfigurationFile(["my_config.json"], _onSuccess, _onFailure);
 *
 * @param {array} args - array. The name of the configuration file to use when loading modules

 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command
 * The callback takes one parameter, containing the message from a command
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.startWithConfigurationFile = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "startWithConfigurationFile", validate(args));
};

/**
 * @description
 * Starts the CX Measure module using custom configuration JSON.
 * Behavior of the two modules is defined by the string provided.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.startWithConfigurationJson([jsonConfig], _onSuccess, _onFailure);
 *
 * @param {array} args - array. The configuration string in JSON format to use when loading modules.
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.startWithConfigurationJson = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "startWithConfigurationJson", validate(args));
};

/**
 * @description
 * Returns whether or not debug logging is enabled.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.isDebugLogEnabled(_onSuccess, _onFailure);
 *
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing Boolean value TRUE or FALSE.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.isDebugLogEnabled = function (success, error) {
    exec(success, error, ForeSeeAPI, "isDebugLogEnabled", []);
};

/**
 * @description
 * Gets the version of the SDK
 *
 * @example
 * cordova.plugins.ForeSeeAPI.getVersion(_onSuccess, _onFailure);
 *
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message with the version of the SDK.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.getVersion = function (success, error) {
    exec(success, error, ForeSeeAPI, "getVersion", []);
};

/**
 * @description
 * Retrieves a user’s contact details.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.getContactDetails(args, _onSuccess, _onFailure);
 *
 * @param {array} args
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the string with a user's contact details (it if was set).
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.getContactDetails = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "getContactDetails", validate(args));
};

/**
 * @description
 * Sets a user’s contact details. This method can be used to provide a user’s contact information, so that they do not need to enter it manually.
 * When provided, the default invite skips the user input screen. Only applies to CONTACT surveys.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.setContactDetails(["Bob"], _onSuccess, _onFailure);
 *
 * @param {array} args
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.setContactDetails = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "setContactDetails", validate(args));
};

/**
 * @description
 * Retrieves a referred contact type.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.getPreferredContactType(args, _onSuccess, _onFailure);
 *
 * @param {array} args
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the string with the referred contact type.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.getPreferredContactType = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "getPreferredContactType", validate(args));
};

/**
 * @description
 * Sets a preferred contact type.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.setPreferredContactType(["Email"], _onSuccess, _onFailure);
 *
 * @param {array} args
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.setPreferredContactType = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "setPreferredContactType", validate(args));
};

/**
 * @description
 * Tells the SDK that a custom invitation was declined.
 * You should call this method whenever a user declines a custom invitation that you’ve presented.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.customInviteDeclined(_onSuccess, _onFailure);
 *
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.customInviteDeclined = function (success, error) {
    exec(success, error, ForeSeeAPI, "customInviteDeclined", []);
};

/**
 * @description
 * Tells the SDK that a custom invitation was accepted.
 * You should call this method whenever a user accepts a custom invitation that you’ve presented.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.customInviteAccepted(_onSuccess, _onFailure);
 *
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.customInviteAccepted = function (success, error) {
    exec(success, error, ForeSeeAPI, "customInviteAccepted", []);
};

/**
 * @description
 * Disables the pooling check.
 * When debugging your implementation of the ForeSee SDK, it may be useful to disable the pooling check.
 * This ensures that the invitation will always shows if the loyalty criteria has been fulfilled.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.setSkipPoolingCheck(["true"], _onSuccess, _onFailure);
 *
 * @param {array} args - array with one element; TRUE of FALSE.
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.setSkipPoolingCheck = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "setSkipPoolingCheck", validate(args));
};

/**
 * @description
 * Sets whether or not to enable debug logging.
 * Debug logging prints useful state information to the console for inspection. By default, debug logging is disabled.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.setDebugLogEnabled(["true"], _onSuccess, _onFailure);
 *
 * @param {array} args - array with one element; TRUE of FALSE.
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.setDebugLogEnabled = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "setDebugLogEnabled", validate(args));
};

/**
 * @description
 * Set the invite listener
 *
 * @example
 * cordova.plugins.ForeSeeAPI.setInviteListener(_onSuccess, _onFailure);
 *
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.setInviteListener = function (success, error) {
    exec(success, error, ForeSeeAPI, "setInviteListener", []);
};

/**
 * @description
 * Remove the invite listener
 *
 * @example
 * cordova.plugins.ForeSeeAPI.removeInviteListener(_onSuccess, _onFailure);
 *
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.removeInviteListener = function (success, error) {
    exec(success, error, ForeSeeAPI, "removeInviteListener", []);
};

/**
 * @description
 * Programmatically present the default Feedback survey (the first one in the configuration json).
 *
 * @example
 * cordova.plugins.ForeSeeAPI.showFeedback(_onSuccess, _onFailure);
 *
 * @param  {callback} success - A Cordova-style success callback object.
 * @param  {callback} error - A Cordova-style error callback object.
 */
exports.showFeedback = function (success, error) {
    exec(success, error, ForeSeeAPI, "showFeedback", []);
};

/**
 * @description
 * Programmatically present the Feedback survey for a given name
 *
 * @example
 * cordova.plugins.ForeSeeAPI.showFeedbackForName(["feedback_1"], _onSuccess, _onFailure);
 *
 * @param {array} args - array with one string element.
 * @param {callback} success - A Cordova-style success callback object.
 * @param {callback} error - A Cordova-style error callback object.
 */
exports.showFeedbackForName = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "showFeedbackForName", validate(args));
};

/**
 * @description
 * Check if a Feedback survey is enabled
 *
 * @example
 * cordova.plugins.ForeSeeAPI.checkIfFeedbackEnabledForName(["feedback_1"], _onSuccess, _onFailure);
 *
 * @param {array} args - array with one string element.
 * @param {callback} success - A Cordova-style success callback object.
 * @param {callback} error - A Cordova-style error callback object.
 */
exports.checkIfFeedbackEnabledForName = function (args, success, error) {
    exec(success, error, ForeSeeAPI, "checkIfFeedbackEnabledForName", validate(args));
};

/**
 * @description
 * Get all available feedback names defined in the Configuration.
 *
 * @example
 * cordova.plugins.ForeSeeAPI.getAvailableFeedbackNames(["feedback_1"], _onSuccess, _onFailure);
 *
 * @param {callback} success - A Cordova-style success callback object.
 * @param {callback} error - A Cordova-style error callback object.
 */
exports.getAvailableFeedbackNames = function (success, error) {
    exec(success, error, ForeSeeAPI, "getAvailableFeedbackNames", []);
};

/**
 * @description
 * Check if the default feedback is enabled. 
 *
 * @example
 * cordova.plugins.ForeSeeAPI.checkIfFeedbackEnabled(["feedback_1"], _onSuccess, _onFailure);
 *
 * @param {callback} success - A Cordova-style success callback object.
 * @param {callback} error - A Cordova-style error callback object.
 */
exports.checkIfFeedbackEnabled = function (success, error) {
    exec(success, error, ForeSeeAPI, "checkIfFeedbackEnabled", []);
};

/**
 * @description
 * Set the Feedback Listener
 *
 * @example
 * cordova.plugins.ForeSeeAPI.setFeedbackListener(_onSuccess, _onFailure);
 *
 * @param {callback} success - Callback that is invoked upon receiving the data about the invoked command.
 * The callback takes one parameter, containing the message from a command.
 * @param {callback} error - Optional callback that is invoked in the event of an error.
 * The callback takes one error parameter, containing the details of the error.
 */
exports.setFeedbackListener = function (success, error) {
    exec(success, error, ForeSeeAPI, "setFeedbackListener", []);
};