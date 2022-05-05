type ChatProfileProps = {
  events?: {
    submit?: (e: Event) => void,
    click?: () => void,
  },
  avatarSrc?: string;
  chatName?: string;
  chatFavorite?: string;
  profileLinkText: string,
  profileLinkTo: string,
}

export {
  ChatProfileProps,
};
