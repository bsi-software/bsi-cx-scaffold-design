const {cx, Icon} = require("@bsi-cx/design-build");
const {footerElements} = require("../../../base");

/**
 * @param {string} template
 * @param {string} elementId
 * @param {string} elementLabel
 * @param {string} dropzoneId
 * @param {[ContentElement]} dropzoneAllowedElements
 * @returns {ContentElement}
 */
module.exports = (
  template = require("../template.twig"),
  elementId = "col-one-footer-68T94f",
  /*elementLabel = '1 Footer column',*/
  elementLabel = "1 Footer Spalte",
  dropzoneId = "col-one-footer-dropzone-jaZSq2",
  dropzoneAllowedElements = [...footerElements]
) =>
  cx.contentElement
    .withFile(template)
    .withElementId(elementId)
    .withLabel(elementLabel)
    .withIcon(Icon.ONE_COLUMN)
    .withDropzones(
      cx.dropzone
        .withDropzone(dropzoneId)
        .withAllowedElements(...dropzoneAllowedElements)
    );
