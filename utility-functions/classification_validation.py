import numpy as np

def stratified_cross_validation(n_splits, classifier, X_train, y_train, random_state=None):
    from sklearn.model_selection import StratifiedKFold
    from sklearn.base import clone

    skfolds = StratifiedKFold(n_splits=n_splits, random_state=random_state)

    fold_results = []

    for train_index, test_index in skfolds.split(X_train, y_train):
        clone_clf = clone(classifier)
        X_train_folds = X_train[train_index]
        y_train_folds = y_train[train_index]
        X_test_fold = X_train[test_index]
        y_test_fold = y_train[test_index]

        clone_clf.fit(X_train_folds, y_train_folds)
        y_pred = clone_clf.predict(X_test_fold)
        n_correct = sum(y_pred == y_test_fold)
        fold_results.append(n_correct / len(y_pred))
    
    return fold_results

def plot_precision_recall_vs_threshold(plt, y_train, y_scores):
    '''
    Plots a graph of precision and recall against the model's threshold values to help you see optimal threshold for your situation

    Args:

    plt - matplotlib pyplot object

    y_train - labels from training

    y_scores - classification scores from training, can be obtained through cross_val_predict() function using the method="decision_function"
    '''
    from sklearn.metrics import precision_recall_curve

    precisions, recalls, thresholds = precision_recall_curve(y_train, y_scores)
    plt.plot(thresholds, precisions[:-1], "b--", label = "Precision")
    plt.plot(thresholds, recalls[:-1], "g--", label = "Recall")
    # Highlight threshold, add legend and axes label
    plt.legend(loc="center right", fontsize=16)
    plt.xlabel("Threshold", fontsize=16)
    plt.grid(True)
    plt.axis([-50000, 50000, 0, 1])

def plot_confusion_matrix(plt, y_train, y_pred):
    '''
    Plots a confusion matrix where the rows are the actual classes and the columns are the predicted ones.

    Returns the confusion matrix it plots

    Args:

    plt - matplotlib pyplot object

    y_train - labels from training

    y_pred - predicted classes from training, can be obtained through cross_val_predict() function
    '''
    from sklearn.metrics import confusion_matrix
    conf_mx = confusion_matrix(y_train, y_pred)
    plt.matshow(conf_mx, cmap = plt.cm.gray)
    return conf_mx

def plot_error_matrix(plt, confusion_matrix):
    '''
    Plots a confusion matrix but removes any correct predictions to highlight where the errors are.

    Returns the error matrix it plots

    Args:

    plt - matplotlib pyplot object

    confusion_matrix - a NumPy confusion matrix (generated using SciKit-Learn's confusion_matrix())
    '''
    row_sums = confusion_matrix.sum(axis = 1, keepdims = True)
    error_mx = confusion_matrix / row_sums # Divide each value by num of images in that category
    np.fill_diagonal(error_mx, 0) # Keep only the errors
    plt.matshow(error_mx, cmap = plt.cm.gray)
    return error_mx

def plot_roc_curve(plt, y_train, y_scores, label = None):
    '''
    Plots a ROC graph to help compare models and find the optimal threshold for the recall (TPR)

    Args:

    plt - matplotlib pyplot object

    y_train - labels from training

    y_scores - classification scores from training, can be obtained through cross_val_predict() function using the method="decision_function"

    label - a label for the plotted line (for a legend if applicable)
    '''
    from sklearn.metrics import roc_curve
    fpr, tpr, thresholds = roc_curve(y_train, y_scores)
    plt.plot(fpr, tpr, linewidth = 2, label = label)
    plt.plot([0, 1], [0, 1], "k--") # Dashed diagonal
    plt.axis([0, 1, 0, 1])
    plt.xlabel('False Positive Rate (Fall-Out)', fontsize=16)
    plt.ylabel('True Positive Rate (Recall)', fontsize=16)
    plt.grid(True)