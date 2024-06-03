import { Dropdown } from 'flowbite-react';
import PosterCardMoreButton from '../posterCard/posterCardMoreButton';
import { useState } from 'react';
import * as collection from '../../services/personalApi/collection/collection';

import { useAtom } from 'jotai';
import { clickedShowId } from './posterCardAtoms';

import { reRenderCollections } from '../profile/profileAtoms';

export default function PosterCardMiniDropdown() {
  const [collections, setCollections] = useState([]);

  const [currentClickedShowId] = useAtom(clickedShowId);

  const [renderCollections, setRenderCollections] =
    useAtom(reRenderCollections);

  const fetchCollections = async () => {
    const coll = await collection.getUserCollections();

    setCollections(coll);
  };

  const addThisShowToCollection = async collectionId => {
    const body = {
      showId: currentClickedShowId,
    };
    await collection.addShowToCollection(collectionId, body);

    setRenderCollections(prev => !prev);
  };

  const deleteThisShowToCollection = async collectionId => {
    const body = {
      showId: currentClickedShowId,
    };
    await collection.deleteShowFromCollection(collectionId, body);

    setRenderCollections(prev => !prev);
  };

  return (
    <Dropdown
      label=''
      dismissOnClick={false}
      renderTrigger={() => (
        <div>
          <PosterCardMoreButton />
        </div>
      )}
    >
      {/* ------------------ */}
      <Dropdown.Item onClick={() => fetchCollections()}>
        <Dropdown
          label=''
          dismissOnClick={true}
          renderTrigger={() => (
            <div>
              <Dropdown.Item>add to collection > </Dropdown.Item>
            </div>
          )}
          placement='right'
        >
          {collections.map((collection, key) => (
            <Dropdown.Item
              onClick={() => addThisShowToCollection(collection._id)}
            >
              {collection.name}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </Dropdown.Item>
      {/* ------------------- */}
      <Dropdown.Item onClick={() => fetchCollections()}>
        <Dropdown
          label=''
          dismissOnClick={true}
          renderTrigger={() => (
            <div>
              <Dropdown.Item>remove from collection </Dropdown.Item>
            </div>
          )}
          placement='right'
        >
          {collections.map((collection, key) => (
            <Dropdown.Item
              onClick={() => deleteThisShowToCollection(collection._id)}
            >
              {collection.name}
            </Dropdown.Item>
          ))}
        </Dropdown>
      </Dropdown.Item>
    </Dropdown>
  );
}
