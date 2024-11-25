import React from 'react';

const Colors = () => {
  return (
     <div>
      <h5>✦ Progress Stepper Component Specifications ✦</h5>
      <ul>
        <li>
          <h5 className="title">Overview</h5>
          <ul>
            <li>The Progress Stepper component is designed to visually indicate progress through a series of steps.</li>
            <li>This component is static, meaning it does not support user interactions, and is suitable for cases where two or more steps are required.</li>
          </ul>
        </li>

        <li>
          <h5 className="title">Orientations</h5>
          <ul>
            <li><h5>Horizontal</h5>Steps are laid out in a row from left to right.</li>
            <li><h5>Vertical</h5>Steps are stacked in a column from top to bottom.</li>
          </ul>
        </li>

        <li>
          <h5 className="title">Content Flexibility</h5>
          <ul>
            <li><h5>Header Text</h5>: An optional title for each step.</li>
            <li><h5>Body Text</h5>: An optional description for each step.</li>
          </ul>
        </li>

        <li>
          <h5 className="title">Status Variants</h5>
          <ul>
            <li>The Progress Stepper supports three types of status variants for each step:</li>
            <li>
              <h5>State Type</h5>
              <ul>
                <li>Description: Displays a textual status (e.g., "Ongoing," "Started," "Completed").</li>
                <li>Container Size: 24x24 px.</li>
              </ul>
            </li>
            <li>
              <h5 className="title">Icon Type</h5>
              <ul>
                <li>Description: Displays an icon representing the status.</li>
                <li>Container Size: 24x24 px.</li>
                <li>Customizable: Icons can be changed to fit design needs.</li>
              </ul>
            </li>
            <li>
              <h5 className="title">Image Type</h5>
              <ul>
                <li>Description: Displays an image representing the step.</li>
                <li>Container Size: 32x32 px.</li>
                <li>Customizable: Images can be changed to fit design needs.</li>
                <li>Note: Steps with images do not support status types like ongoing, started, or completed.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h5 className="title">Usage Restrictions</h5>
          <ul>
            <li>The Progress Stepper component must be used with two or more steps. It does not support a single step scenario.</li>
          </ul>
        </li>
        <li>
          <h5 className="title">Design Specifications</h5>
          <ul>
            <li><h5>Size & Spacing</h5>:
              <ul>
                <li>Step Container Size: Ensure appropriate padding and margins for both horizontal and vertical orientations.</li>
                <li>Icon Container: 24x24 px.</li>
                <li>Image Container: 32x32 px.</li>
              </ul>
            </li>
            <li><h5>Text Style</h5>:
              <ul>
                <li>Header Text: Should be consistent in font, size, and weight as defined by the design system.</li>
                <li>Body Text: Should follow the body text style guidelines.</li>
              </ul>
            </li>
            <li><h5 className="title">Color & Themes</h5>:
              <ul>
                <li>Status Colors: Define colors for each status type (e.g., Ongoing, Started, Completed) for both icons and text.</li>
                <li>Variant Colors: Ensure that colors for icons and images are adaptable to different themes.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h5 className="title-1">Usage Guidelines</h5>
          <ul>
            <li>Use when displaying a process with two or more steps.</li>
            <li>Do not use for single-step processes.</li>
            <li>Choose between horizontal or vertical orientation based on available space and design context.</li>
            <li>Utilize header and body text to provide additional context for each step.</li>
            <li>Select the appropriate status variant (state, icon, or image) based on the information you want to convey.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Colors;
