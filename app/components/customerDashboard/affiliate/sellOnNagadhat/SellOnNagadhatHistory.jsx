import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SellOnNagadhatHistory = () => {
    return (
        <div>
            <div className="table-responsive pt-4">
                <table className="table table-responsive-md table-hover">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Package</th>
                            <th>Date</th>
                            <th>Duration (Month)</th>
                            <th>Completed (Month)</th>
                            <th>Order value</th>
                            <th>MRP Value</th>
                            <th>Monthly Return</th>
                            <th>Instalment</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Daily Needs Package 2</td>
                            <td>2022-05-14</td>
                            <td>24</td>
                            <td>24 / 24</td>
                            <td>৳ 927</td>
                            <td>৳ 976</td>
                            <td>৳ 2.04</td>
                            <td>
                                <FaCheckCircle className="text-success" /> Yes
                            </td>
                            <td>
                                <span className="text-success">Active</span>
                            </td>
                            <td>
                                <a
                                    href="/affiliat-sell-on-nagadhat/id"
                                    className="btn"
                                >
                                    View
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Disposable 3ply Facial Protective Mask</td>
                            <td>2022-05-29</td>
                            <td>30</td>
                            <td>26 / 30</td>
                            <td>৳ 12000</td>
                            <td>৳ 20000</td>
                            <td>৳ 666.67</td>
                            <td>
                                <FaCheckCircle className="text-success" /> Yes
                            </td>
                            <td>
                                <span className="text-info">Completed</span>
                            </td>
                            <td>
                                <a
                                    href="/affiliat-sell-on-nagadhat/id"
                                    className="btn"
                                >
                                    View
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Disposable Medical Mask</td>
                            <td>2021-12-24</td>
                            <td>15</td>
                            <td>15 / 15</td>
                            <td>৳ 1000</td>
                            <td>৳ 2000</td>
                            <td>৳ 133.33</td>
                            <td>
                                <FaCheckCircle className="text-success" /> Yes
                            </td>
                            <td>
                                <span className="text-info">Completed</span>
                            </td>
                            <td>
                                <a
                                    href="/affiliat-sell-on-nagadhat/id"
                                    className="btn"
                                >
                                    View
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SellOnNagadhatHistory;
