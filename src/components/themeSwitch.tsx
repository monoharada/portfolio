const themeSwitch = () => {
    return (
        <fieldset>
          <label htmlFor="theme">
            <input
              type="checkbox"
              role="switch"
              id="theme"
              name="theme"
            />
            change theme{" "}
          </label>
        </fieldset>
    );
}

export default themeSwitch;