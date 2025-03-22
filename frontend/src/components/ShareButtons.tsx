// 📁 src/components/ShareButtons.tsx

import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon
} from 'react-share';

interface Props {
  url: string;
  title: string;
  summary?: string;
}

const ShareButtons = ({ url, title, summary }: Props) => {
  return (
    <div className="flex flex-wrap gap-3 mt-8">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={title} summary={summary} source={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <EmailShareButton url={url} subject={title} body={summary}>
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
};

export default ShareButtons;
