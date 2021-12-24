import numpy as np
from sklearn.model_selection import cross_val_score

def calculate_rmse(model, X, y, k_folds = 10):
    '''
    Calculates the root mean square error (RMSE) over k folds given a model

    model - SciKit-Learn regression estimator

    X - Array of features

    y - Array of labels

    k_folds - number of folds to use in the cross-validation
    '''
    scores = cross_val_score(model, X, y,
                            scoring = "neg_mean_squared_error", cv = k_folds)
    return np.sqrt(-scores)

def display_scores(rmse_scores):
    '''
    Displays a model's evaluation based on its RMSE (generated from the calculate_rmse() function)
    '''
    print("Scores: ", rmse_scores)
    print("Mean: ", rmse_scores.mean())
    print("Standard deviation: ", rmse_scores.std())
    print("\n")