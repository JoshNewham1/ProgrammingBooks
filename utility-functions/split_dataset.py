from zlib import crc32
import numpy as np

def naive_split_train_test(data, test_ratio):
    np.random.seed(42)
    shuffled_indices = np.random.permutation(len(data))
    test_set_size = int(len(data) * test_ratio)
    test_indices = shuffled_indices[:test_set_size]
    train_indices = shuffled_indices[test_set_size:]
    return data.iloc[train_indices], data.iloc[test_indices]

def is_in_test_set(id_value, test_ratio):
    # If the identifier's numerical hash is less than the max hash given by the threshold
    return crc32(np.int64(id_value)) & 0xffffffff < test_ratio * 2**32

def split_train_test_by_id(data, test_ratio, id_column):
    ids = data[id_column]
    in_test_set = ids.apply(lambda id_: is_in_test_set(id_, test_ratio))
    # ~ is the invert/compliment, data.loc accepts a boolean array for which rows to include
    return data.loc[~in_test_set], data.loc[in_test_set]