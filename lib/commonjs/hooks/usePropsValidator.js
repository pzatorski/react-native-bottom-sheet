"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePropsValidator = void 0;
var _invariant = _interopRequireDefault(require("invariant"));
var _react = require("react");
var _constants = require("../components/bottomSheet/constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @todo
 * replace this with `prop-types`.
 */

const usePropsValidator = ({
  index,
  snapPoints,
  enableDynamicSizing,
  topInset,
  bottomInset
}) => {
  (0, _react.useMemo)(() => {
    //#region snap points
    const _snapPoints = snapPoints ? 'get' in snapPoints ? snapPoints.get() : snapPoints : [];
    (0, _invariant.default)(_snapPoints || enableDynamicSizing, `'snapPoints' was not provided! please provide at least one snap point.`);
    _snapPoints.map(snapPoint => {
      const _snapPoint = typeof snapPoint === 'number' ? snapPoint : Number.parseInt(snapPoint.replace('%', ''), 10);
      (0, _invariant.default)(_snapPoint > 0 || _snapPoint === _constants.INITIAL_SNAP_POINT, `Snap point '${snapPoint}' is invalid. if you want to allow user to close the sheet, Please use 'enablePanDownToClose' prop.`);
    });
    (0, _invariant.default)('value' in _snapPoints || _snapPoints.length > 0 || enableDynamicSizing, `'snapPoints' was provided with no points! please provide at least one snap point.`);
    //#endregion

    //#region index
    (0, _invariant.default)(typeof index === 'number' || typeof index === 'undefined', `'index' was provided but with wrong type ! expected type is a number.`);
    (0, _invariant.default)(enableDynamicSizing || (typeof index === 'number' ? index >= -1 && index <= _snapPoints.length - 1 : true), `'index' was provided but out of the provided snap points range! expected value to be between -1, ${_snapPoints.length - 1}`);
    //#endregion

    //#region insets
    (0, _invariant.default)(typeof topInset === 'number' || typeof topInset === 'undefined', `'topInset' was provided but with wrong type ! expected type is a number.`);
    (0, _invariant.default)(typeof bottomInset === 'number' || typeof bottomInset === 'undefined', `'bottomInset' was provided but with wrong type ! expected type is a number.`);
    //#endregion

    // animations
  }, [index, snapPoints, topInset, bottomInset, enableDynamicSizing]);
};
exports.usePropsValidator = usePropsValidator;
//# sourceMappingURL=usePropsValidator.js.map