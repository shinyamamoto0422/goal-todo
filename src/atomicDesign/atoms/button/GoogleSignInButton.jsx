import GoogleLogo from "../../../assets/googleLogo.svg"

export const GoogleSignInButton = ({ content }) => {
    return (
      <button class="bg-white-200 hover:bg-gray-100 border border-gray-400 py-2 rounded-2xl flex flex-row">
        <img class="w-8 pl-3 pt-0.5" src={GoogleLogo} alt="googleLogo" />
        <div class="pl-6 text-gray-600 font-bold">Continue with Google</div>
      </button>
    )
  }