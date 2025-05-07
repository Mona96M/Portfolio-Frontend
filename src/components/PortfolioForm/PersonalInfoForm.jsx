import React from "react";

function PersonalInfoForm(props) {
    return (
    <div>
        <div>
        <label htmlFor="full_name" className="label">Full name</label>
        <div className="control">
        <input className="input"
            id="full_name"
            name="full_name"
            required
            value={props.personalData.full_name}
            onChange={(event) =>
            props.setPersonalData((prev) => ({
                ...prev,
                full_name: event.target.value,
            }))
            }
        /></div>
        </div>
        <div>
        <label htmlFor="phone" className="label">Phone Number</label>
        <div className="control">
        <input className="input"
            id="phone"
            name="phone"
            required
            value={props.personalData.phone}
            onChange={(event) =>
            props.setPersonalData((prev) => ({
                ...prev,
                phone: event.target.value,
            }))
            }
        />
        </div></div>
        <div>
        <label htmlFor="linkedin" className="label">Linkedin</label>
        <div className="control">
        <input className="input"
            id="linkedin"
            name="linkedin"
            value={props.personalData.linkedin}
            onChange={(event) =>
            props.setPersonalData((prev) => ({
                ...prev,
                linkedin: event.target.value,
            }))
            }
        />
        </div></div>
        <div>
        <label htmlFor="bio" className="label">About me</label>
        <div className="control">
        <textarea className="textarea"
            id="bio"
            name="bio"
            required
            value={props.personalData.bio}
            onChange={(event) =>
            props.setPersonalData((prev) => ({
                ...prev,
                bio: event.target.value,
            }))
            }
        />
        </div></div>
    </div>
    );
}
export default PersonalInfoForm;
