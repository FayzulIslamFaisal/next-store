import React from 'react'

const AffiliateDashboardBonusDataTable = () => {
    return (
        <div className="border rounded table-responsive">
            <h3 className="px-2 pt-3 fs-6 fw-bold">Affiliate Bonus</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">From user</th>
                        <th scope="col">Purpose</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>50 ৳</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>60 ৳</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>Thornton</td>
                        <td>50 ৳</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>60 ৳</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Larry the Bird</td>
                        <td>Thornton</td>
                        <td>50 ৳</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AffiliateDashboardBonusDataTable
