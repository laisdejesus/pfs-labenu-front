export const goToFeed = (history) => {
    history.push("/music/all");
};

export const goToLogin = (history) => {
    history.push("/login");
};

export const goToSignUp = (history) => {
    history.push("/signup");
};
  
export const goToMusicDetail = (history, id) => {
    history.push(`/pokemon/${id}`)
};
  
export const goToCreateMusic = (history) => {
    history.push("/music/create");
};