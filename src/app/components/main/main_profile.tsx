import { SMainProfile } from "./styled";

export default function MainProfile() {
  return (
    <SMainProfile>
      <div className="profile-logo">
        <img src="/main-profile.svg" alt="가인지" />
      </div>
      <div className="profile-content">
        <p className="gainge">가인지캠퍼스</p>
        <p className="user-name">가인지님</p>
      </div>
    </SMainProfile>
  )
}