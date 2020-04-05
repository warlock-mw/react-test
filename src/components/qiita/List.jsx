import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateListAsync, selectQiita } from '@/modules/qiitaModule';
import styles from '@/scss/qiita.module.scss';

function List() {
    const data     = useSelector(selectQiita);
    const dispatch = useDispatch();
    const handle   = bindActionCreators({ updateListAsync }, dispatch);

    return (
      <div>
        <p><button type="button" onClick={handle.updateListAsync}>データ取得</button></p>

        {data.postList.length > 0 ? (
          <table className={styles.QiitaTable}>
            <thead>
              <tr>
                <th>ユーザー</th>
                <th>タイトル</th>
                <th>ページ</th>
            </tr>
            </thead>
            <tbody>
              {data.postList.map((v, i) => (
                <tr key={i}>
                  <td>{v.user}</td>
                  <td>{v.title}</td>
                  <td><a href={v.url} target="_blank" rel="noopener noreferrer">ページ</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>データがありません</p>
        )}
      </div>
    );
}

export default List;