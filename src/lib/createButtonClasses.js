function createButtonClasses() {
  const activeBeforeClasses = `active:before:w-full active:before:h-full active:before:border-[#ecf0f1] active:before:opacity-1 active:before:border-t active:before:border-r active:before:border-solid`;
  const focusBeforeClasses = `focus:before:w-full focus:before:h-full focus:before:border-[#ecf0f1] focus:before:opacity-1 focus:before:border-t focus:before:border-r focus:before:border-solid`;
  const hoverBeforeClasses = `hover:before:w-full hover:before:h-full hover:before:border-[#ecf0f1] hover:before:opacity-1 hover:before:border-t hover:before:border-r hover:before:border-solid ${activeBeforeClasses} ${focusBeforeClasses}`;
  const activeAfterClasses = `active:after:w-full active:after:h-full active:after:border-[#ecf0f1] active:after:opacity-1 active:after:border-b active:after:border-l active:after:border-solid`;
  const focusAfterClasses = `focus:after:w-full focus:after:h-full focus:after:border-[#ecf0f1] focus:after:opacity-1 focus:after:border-b focus:after:border-l focus:after:border-solid`;
  const hoverAfterClasses = `hover:after:w-full hover:after:h-full hover:after:border-[#ecf0f1] hover:after:opacity-1 hover:after:border-b hover:after:border-l hover:after:border-solid ${activeAfterClasses} ${focusAfterClasses}`;

  const beforeClasses = ` before:content-["_"] before:border-none before:absolute before:w-0 before:h-0 before:top-0 before:left-0 ${hoverBeforeClasses}`;
  const afterClasses = ` after:content-["_"] after:border-none after:absolute after:w-0 after:h-0 after:bottom-0 after:right-0 ${hoverAfterClasses}`;

  const buttonFocusClasses = `focus:bg-medium-gray focus:outline-none`;
  const buttonHoverClasses = `hover:bg-medium-gray  ${buttonFocusClasses}`;
  const classes = `animate-button-borders relative cursor-pointer w-full text-white z-[3] ${buttonHoverClasses} ${beforeClasses} ${afterClasses} `;
  return classes;
}

export default createButtonClasses;
