import React from 'react';
import clsx from 'clsx';

import LastUpdated from '@theme/LastUpdated';
import EditThisPage from '@theme/EditThisPage';
import TagsListInline from '@theme/TagsListInline';
function TagsRow(props) {
  return (
    <div
      className={clsx(
        'row margin-bottom--sm',
      )}>
      <div className="col">
        <TagsListInline {...props} />
      </div>
    </div>
  );
}

function EditMetaRow({
  editUrl,
  lastUpdatedAt,
  lastUpdatedBy,
  formattedLastUpdatedAt,
}) {
  return (
    <div className={clsx( 'doc-page--footer--edit')}>
      <div>{editUrl && <EditThisPage editUrl={editUrl} />}</div>

      <div>
        {(lastUpdatedAt || lastUpdatedBy) && (
          <LastUpdated
            lastUpdatedAt={lastUpdatedAt}
            formattedLastUpdatedAt={formattedLastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
      </div>
    </div>
  );
}

export default function DocItemFooter(props) {
  const {content: DocContent} = props;
  const {metadata} = DocContent;
  const {editUrl, lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy, tags, frontMatter} =
    metadata;
  const canDisplayTagsRow = tags.length > 0;
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;

  const discordLink = frontMatter.help_discord;
  const githubDiscussionLink = frontMatter.help_github_discussions;
  const showHelpLink = !!discordLink || !!githubDiscussionLink;
  if (!canDisplayFooter) {
    return <></>;
  }

  return (
    <footer className="doc-page--footer">
        <p>
          If you need help with any of the steps described in this document, please reach out to us on our <a href="https://github.com/chatwoot/chatwoot/discussions/">GitHub discussions</a> or <a href="https://discord.gg/jypY57m">Discord channel</a>.
        </p>
      {canDisplayTagsRow && <TagsRow tags={tags} />}
      {canDisplayEditMetaRow && (
        <EditMetaRow
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
          formattedLastUpdatedAt={formattedLastUpdatedAt}
        />
      )}
    </footer>
  );
}
